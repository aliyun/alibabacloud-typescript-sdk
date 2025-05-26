// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InputFileFigures extends $dara.Model {
  figureClusterId?: string;
  figureId?: string;
  figureType?: string;
  static names(): { [key: string]: string } {
    return {
      figureClusterId: 'FigureClusterId',
      figureId: 'FigureId',
      figureType: 'FigureType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureClusterId: 'string',
      figureId: 'string',
      figureType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

