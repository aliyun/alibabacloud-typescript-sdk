// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveWhiteListStrategyAssetsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The operation that you want to perform. This parameter is in the JSON format. The value is case-sensitive. The value contains the following fields:
   * 
   * *   **status**: the operation. Valid values:
   * 
   *     *   **0**: the delete operation.
   *     *   **1**: the add operation.
   * 
   * *   **target**: the UUID of the server.
   * 
   * >  You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain the value of **target** from the response parameter Uuid.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"status":0,"target":"c98dcd24-fa57-4759-b5ec-f8a4ffeed****"}]
   */
  operations?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   **1**: learning policy.
   * *   **2**: application policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  relationType?: number;
  /**
   * @remarks
   * The source IP address of the request. You do not need to specify this parameter. It is automatically obtained by the system.
   * 
   * @example
   * 115.193.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * >  You can call the [DescribeWhiteListStrategyList](~~DescribeWhiteListStrategyList~~) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2730
   */
  strategyId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      operations: 'Operations',
      relationType: 'RelationType',
      sourceIp: 'SourceIp',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      operations: 'string',
      relationType: 'number',
      sourceIp: 'string',
      strategyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

