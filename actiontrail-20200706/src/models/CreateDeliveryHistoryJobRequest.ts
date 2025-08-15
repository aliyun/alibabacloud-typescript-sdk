// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeliveryHistoryJobRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests.
   * 
   * The token can contain only ASCII characters and can be up to 64 characters in length.
   * 
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the trail for which you want to create a historical event delivery task.
   * 
   * This parameter is required.
   * 
   * @example
   * trail-name
   */
  trailName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      trailName: 'TrailName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      trailName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

