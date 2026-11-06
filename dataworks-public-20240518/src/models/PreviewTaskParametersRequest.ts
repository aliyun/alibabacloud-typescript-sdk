// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewTaskParametersRequest extends $dara.Model {
  /**
   * @remarks
   * The business date. The value is a 13-digit UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1792425600000
   */
  bizdate?: number;
  /**
   * @remarks
   * The scheduling CRON expression.
   * 
   * This parameter is required.
   * 
   * @example
   * 00 00 00 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * The list of script parameters. The length cannot exceed 65,535 characters. Separate multiple parameters with spaces, such as para1=$bizdate para2=$[hh24]. An empty string is allowed.
   * 
   * This parameter is required.
   * 
   * @example
   * para1=$bizdate para2=$[hh24]
   */
  parameters?: string;
  /**
   * @remarks
   * The number of scheduling cycles to preview. Valid values: 1 to 10. Default value: 3.
   * 
   * @example
   * 3
   */
  previewCount?: number;
  /**
   * @remarks
   * The project environment. Valid values:
   * - Prod: production
   * - Dev: development
   * Default value: Prod.
   * 
   * @example
   * Prod
   */
  projectEnv?: string;
  /**
   * @remarks
   * The workspace ID. The workspace must belong to the current tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The preview start time for the first scheduling day. The format is HH:mm:ss. Default value: 00:00:00. This parameter takes effect only for non-daily schedules and is used to filter out cycles that occur before this time on the first scheduling day.
   * 
   * @example
   * 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bizdate: 'Bizdate',
      cron: 'Cron',
      parameters: 'Parameters',
      previewCount: 'PreviewCount',
      projectEnv: 'ProjectEnv',
      projectId: 'ProjectId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizdate: 'number',
      cron: 'string',
      parameters: 'string',
      previewCount: 'number',
      projectEnv: 'string',
      projectId: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

