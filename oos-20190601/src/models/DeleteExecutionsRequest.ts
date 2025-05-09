// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteExecutionsRequest extends $dara.Model {
  /**
   * @remarks
   * The execution IDs.
   * 
   * You can specify multiple execution IDs in a JSON array in the format of `["xxxxxxxxx", "yyyyyyyyy", ... "zzzzzzzzz"]`. You can specify up to 100 execution IDs at a time. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["exec-xxx"]
   */
  executionIds?: string;
  /**
   * @remarks
   * Whether to force delete the running task, the default value is false.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      executionIds: 'ExecutionIds',
      force: 'Force',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionIds: 'string',
      force: 'boolean',
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

