// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteChangeSetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the change set.
   * 
   * This parameter is required.
   * 
   * @example
   * 1f6521a4-05af-4975-afe9-bc4b45ad****
   */
  changeSetId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests.
   * 
   * The token can be up to 64 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the change set. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      clientToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

