// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * appIds
   * 
   * @example
   * "b72c0ed4-a69f-4872-b4c6-def5555bfd3e,a72c0ed4-a69f-4872-b4c6-def5555bfd3e"
   */
  appIds?: string;
  /**
   * @remarks
   * The operation command. Valid values:
   * - export: export
   * - import: import
   * - clone: clone
   * 
   * @example
   * export
   */
  cmd?: string;
  /**
   * @remarks
   * Specifies whether to export the application binary. Default value: false.
   * 
   * @example
   * {withBinary:true}
   */
  config?: string;
  /**
   * @remarks
   * The row data of the imported application, which is sourced from the JSON file of the exported application.
   * 
   * @example
   * {"job_id":"b72c0ed4-a69f-4872-b4c6-def5555bfd3e","app_info":"xxxx"
   */
  rawData?: string;
  /**
   * @remarks
   * regionId
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'appIds',
      cmd: 'cmd',
      config: 'config',
      rawData: 'rawData',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      cmd: 'string',
      config: 'string',
      rawData: 'string',
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

