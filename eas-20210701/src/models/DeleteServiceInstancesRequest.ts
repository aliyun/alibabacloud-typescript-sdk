// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteServiceInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the container whose process needs to be restarted. This parameter takes effect only if the SoftRestart parameter is set to true.
   * 
   * @example
   * worker0
   */
  container?: string;
  /**
   * @remarks
   * The instances that you want to restart. Separate multiple instance names with commas (,). For more information about how to query the instance name, see [ListServiceInstances](https://help.aliyun.com/document_detail/412108.html).
   * 
   * This parameter is required.
   * 
   * @example
   * foo-rdsbxxxx,foo-rdsaxxxx
   */
  instanceList?: string;
  /**
   * @remarks
   * Specifies whether to restart only the container process without recreating the instance. Default value: false. Valid values: true and false.
   * 
   * @example
   * true
   */
  softRestart?: boolean;
  static names(): { [key: string]: string } {
    return {
      container: 'Container',
      instanceList: 'InstanceList',
      softRestart: 'SoftRestart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      container: 'string',
      instanceList: 'string',
      softRestart: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

