// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageResultExtResponseBodyDataPublicFigure extends $dara.Model {
  /**
   * @remarks
   * Identified person coding information.
   * 
   * @example
   * yzazhzou
   */
  figureId?: string;
  static names(): { [key: string]: string } {
    return {
      figureId: 'FigureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

