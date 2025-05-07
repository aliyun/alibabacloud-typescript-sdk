// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchStopApplicationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * *   If the request is successful, this parameter is not returned.****
   * *   This parameter is returned only if the request failed.**** For more information, see the "**Error codes**" section in this topic.
   * 
   * @example
   * 4a815998-b468-4bea-b7d8-59f52a44****
   */
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

