// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHoneypotNodeMetricListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The monitoring data.
   * 
   * @example
   * {
   *     "code": "200",
   *     "datapoints": "[{\\"timestamp\\":1698375060000,\\"instanceId\\":\\"i-bp18jn50nid83nsu****\\",\\"ip\\":\\"1.1.1.1\\",\\"userId\\":\\"132776878515****\\",\\"Minimum\\":67084.0,\\"Maximum\\":67084.0,\\"Average\\":67084.0},{\\"timestamp\\":1698375120000,\\"instanceId\\":\\"i-bp18jn50nid83nsu****\\",\\"ip\\":\\"1.1.1.1\\",\\"userId\\":\\"132776878515****\\",\\"Minimum\\":63704.0,\\"Maximum\\":63704.0,\\"Average\\":63704.0},{\\"timestamp\\":1698375180000,\\"instanceId\\":\\"i-bp18jn50nid83nsu****\\",\\"ip\\":\\"1.1.1.1\\",\\"userId\\":\\"132776878515****\\",\\"Minimum\\":67624.0,\\"Maximum\\":67624.0,\\"Average\\":67624.0},{\\"timestamp\\":1698375240000,\\"instanceId\\":\\"i-bp18jn50nid83nsu****\\",\\"ip\\":\\"1.1.1.1\\",\\"userId\\":\\"132776878515****\\",\\"Minimum\\":68432.0,\\"Maximum\\":68432.0,\\"Average\\":68432.0},{\\"timestamp\\":1698375300000,\\"instanceId\\":\\"i-bp18jn50nid83nsu****\\",\\"ip\\":\\"1.1.1.1\\",\\"userId\\":\\"132776878515****\\",\\"Minimum\\":70148.0,\\"Maximum\\":70148.0,\\"Average\\":70148.0},{\\"timestamp\\":1698375360000,\\"instanceId\\":\\"i-bp18jn50nid83nsu****\\",\\"ip\\":\\"1.1.1.1\\",\\"userId\\":\\"132776878515****\\",\\"Minimum\\":63612.0,\\"Maximum\\":63612.0,\\"Average\\":63612.0},{\\"timestamp\\":1698375420000,\\"instanceId\\":\\"i-bp18jn50nid83nsu****\\",\\"ip\\":\\"1.1.1.1\\",\\"userId\\":\\"132776878515****\\",\\"Minimum\\":68032.0,\\"Maximum\\":68032.0,\\"Average\\":68032.0},{\\"timestamp\\":1698375480000,\\"instanceId\\":\\"i-bp18jn50nid83nsu****\\",\\"ip\\":\\"1.1.1.1\\",\\"userId\\":\\"132776878515****\\",\\"Minimum\\":67400.0,\\"Maximum\\":67400.0,\\"Average\\":67400.0},{\\"timestamp\\":1698375540000,\\"instanceId\\":\\"i-bp18jn50nid83nsu****\\",\\"ip\\":\\"1.1.1.1\\",\\"userId\\":\\"132776878515****\\",\\"Minimum\\":65352.0,\\"Maximum\\":65352.0,\\"Average\\":65352.0}]",
   *     "period": "60",
   *     "requestId": "AFE33E4E-70A3-5BAE-AEA8-4D3BF3A75067",
   *     "success": true
   * }
   */
  data?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 48F523DA-4C7E-5417-B872-E313E5A4****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

