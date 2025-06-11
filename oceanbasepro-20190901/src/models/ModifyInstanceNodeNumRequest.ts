// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceNodeNumRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request. Default value: false. Valid values:
   * - true: Only a dry-run request is sent and the number of nodes in the instance is not modified. If the dry run succeeds, DryRunResult=true is returned. If the dry run fails, an error code is returned.
   * - false: The actual request is sent and no dry run is performed. The number of nodes is changed if the requirements are met. By default, the DryRunResult parameter returns false if you set DryRun to false.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of nodes in the cluster. If the cluster is deployed in n-n-n mode, the number of nodes in the cluster equals n × 3.
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  nodeNum?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      nodeNum: 'NodeNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      instanceId: 'string',
      nodeNum: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

