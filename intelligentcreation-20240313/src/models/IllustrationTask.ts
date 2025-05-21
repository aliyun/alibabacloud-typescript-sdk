// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IllustrationTask extends $dara.Model {
  gmtCreate?: string;
  gmtModified?: string;
  illustrationIds?: number[];
  illustrationTaskId?: number;
  /**
   * @example
   * Success
   */
  taskStatus?: string;
  textId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      illustrationIds: 'illustrationIds',
      illustrationTaskId: 'illustrationTaskId',
      taskStatus: 'taskStatus',
      textId: 'textId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      illustrationIds: { 'type': 'array', 'itemType': 'number' },
      illustrationTaskId: 'number',
      taskStatus: 'string',
      textId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.illustrationIds)) {
      $dara.Model.validateArray(this.illustrationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

