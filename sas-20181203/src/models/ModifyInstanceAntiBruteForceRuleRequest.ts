// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAntiBruteForceRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the anti-brute-force attacks rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 65767
   */
  newRuleId?: number;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 1.2.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The UUID of the server for which you want to modify the anti-brute-force attacks rule.
   * You can invoke the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain the UUID of the server.
   * 
   * This parameter is required.
   * 
   * @example
   * 7cc91747-2845-40d4-bb69-c077597f****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      newRuleId: 'NewRuleId',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newRuleId: 'number',
      resourceOwnerId: 'number',
      sourceIp: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

