// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertUmodelCommonSchemaRefRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run for this request. Valid values:
   * - true: Sends a check request without performing actual changes.
   * - false: Sends a normal request.
   * Default value: false.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The public Umodel schema group.
   * 
   * This parameter is required.
   * 
   * @example
   * card-service-daily01
   */
  group?: string;
  /**
   * @remarks
   * The version number.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'dryRun',
      group: 'group',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      group: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

