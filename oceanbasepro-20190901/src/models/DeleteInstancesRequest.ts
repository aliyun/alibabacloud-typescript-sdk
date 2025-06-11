// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The backup retention strategy for cluster deletion. Valid values:  
   * - receive_all: retains all backup sets.   
   * - delete_all: deletes all backup sets.   
   * - receive_last: retains the last backup set.    
   * 
   * > <br>Default value: delete_all.
   * 
   * @example
   * delete_all
   */
  backupRetainMode?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request. Default value: false. Valid values:
   * - true: Only a dry-run request is sent and the instance is not deleted. If the dry run succeeds, DryRunResult=true is returned. If the dry run fails, an error code is returned.
   * - false: The actual request is sent and no dry run is performed. The instance is deleted if the requirements are met. By default, false is returned for the parameter DryRunResult if you set DryRun to false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the cluster to be deleted.   
   * The value is a string in the JSON format.
   * 
   * This parameter is required.
   * 
   * @example
   * [”ob ob3f6yhv9uxxxx“]
   */
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      backupRetainMode: 'BackupRetainMode',
      dryRun: 'DryRun',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetainMode: 'string',
      dryRun: 'boolean',
      instanceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

