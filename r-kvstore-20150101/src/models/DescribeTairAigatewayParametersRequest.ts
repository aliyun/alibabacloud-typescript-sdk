// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTairAIGatewayParametersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * tg-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The plug-in type. You can use this parameter to filter the parameters of a specific plug-in.
   * 
   * @example
   * ai_cache
   */
  pluginType?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61012.html) operation to obtain the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pluginType: 'PluginType',
      regionId: 'RegionId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pluginType: 'string',
      regionId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

