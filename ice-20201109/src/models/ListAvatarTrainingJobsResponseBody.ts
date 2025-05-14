// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAvatarTrainingJobsResponseBodyData } from "./ListAvatarTrainingJobsResponseBodyData";


export class ListAvatarTrainingJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListAvatarTrainingJobsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
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
      data: ListAvatarTrainingJobsResponseBodyData,
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

