// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFlowJSONAssetRequest extends $dara.Model {
  /**
   * @remarks
   * SpaceId/instance ID of ISV sub customer.
   * 
   * @example
   * 9399393
   */
  custSpaceId?: string;
  /**
   * @remarks
   * JSON file generated according to Facebook flow rules.
   * 
   * This parameter is required.
   * 
   * @example
   * https://aliyun/json.json
   */
  filePath?: string;
  /**
   * @remarks
   * The Flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * flow_001
   */
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      filePath: 'FilePath',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      filePath: 'string',
      flowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

