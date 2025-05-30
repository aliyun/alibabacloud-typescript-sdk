// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMmsDataSourceResponseBodyData extends $dara.Model {
  asyncTaskId?: number;
  sourceId?: number;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'asyncTaskId',
      sourceId: 'sourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'number',
      sourceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

