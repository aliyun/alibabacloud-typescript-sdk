// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiAppDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The AI application ID. This parameter is required. The AppId is derived from AI applications on integrated external AI platforms, such as Model Studio and Dify. Before calling this API, you must call InitAiAppScan to initiate the activation and then call ConfirmAiAppScan to confirm the activation of the AI application detection service. To obtain a valid AppId, you can call ListAiAppByPage to query the list of integrated applications.
   * 
   * This parameter is required.
   * 
   * @example
   * id-xxx
   */
  appId?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2026-01-02 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2026-01-01 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      regionId: 'string',
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

