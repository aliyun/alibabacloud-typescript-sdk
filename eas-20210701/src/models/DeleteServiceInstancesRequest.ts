// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteServiceInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the container in which to restart the process. This parameter is valid only when \\`SoftRestart\\` is set to \\`true\\`.
   * 
   * @example
   * worker0
   */
  container?: string;
  /**
   * @remarks
   * The instances to restart. Separate multiple instance names with a comma (,). For more information, see [ListServiceInstances](https://help.aliyun.com/document_detail/412108.html).
   * 
   * @example
   * foo-rdsbxxxx,foo-rdsaxxxx
   */
  instanceList?: string;
  /**
   * @remarks
   * Specifies whether the instance is a replica.
   * 
   * @example
   * false
   */
  isReplica?: boolean;
  /**
   * @remarks
   * Specifies whether to restart only the container process without rebuilding the instance. The default value is false.
   * 
   * @example
   * true
   */
  softRestart?: boolean;
  static names(): { [key: string]: string } {
    return {
      container: 'Container',
      instanceList: 'InstanceList',
      isReplica: 'IsReplica',
      softRestart: 'SoftRestart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      container: 'string',
      instanceList: 'string',
      isReplica: 'boolean',
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

