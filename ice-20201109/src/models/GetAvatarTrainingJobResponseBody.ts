// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAvatarTrainingJobResponseBodyData } from "./GetAvatarTrainingJobResponseBodyData";


export class GetAvatarTrainingJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned if the request was successful.
   */
  data?: GetAvatarTrainingJobResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAvatarTrainingJobResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

