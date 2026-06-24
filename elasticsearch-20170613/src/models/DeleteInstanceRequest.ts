// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * The release type. Valid values:
   * 
   * - immediate: The instance is immediately deleted. After deletion, the system permanently clears all data, and the instance no longer appears in the instance list.
   * - protective: The instance is frozen for 24 hours before the data is permanently cleared. During this period, the instance still appears in the instance list, and you can choose to [restore the instance](https://help.aliyun.com/document_detail/202195.html) or [immediately release it](https://help.aliyun.com/document_detail/202195.html).
   * 
   * @example
   * protective
   */
  deleteType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      deleteType: 'deleteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deleteType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

