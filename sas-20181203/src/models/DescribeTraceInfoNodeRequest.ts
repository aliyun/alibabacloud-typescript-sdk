// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTraceInfoNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the alert event.
   * 
   * > You can call the [DescribeSuspEvents](~~DescribeSuspEvents~~) operation to query the names of alerts events.
   * 
   * @example
   * WEBSHELL
   */
  eventName?: string;
  /**
   * @remarks
   * The ID of the request source. Set the value to sas.
   * 
   * This parameter is required.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The time when the alert event was first detected.
   * 
   * @example
   * 1635978934000
   */
  incidentTime?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request. The value of this parameter is specified by the system.
   * 
   * @example
   * 127.0.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The type of the vertex. You can call the [DescribeTraceInfoDetail](~~DescribeTraceInfoDetail~~) operation to query the types of vertexes.
   * 
   * This parameter is required.
   * 
   * @example
   * SAS_ASSET
   */
  type?: string;
  /**
   * @remarks
   * The UUID of the server. You can call the [DescribeSuspEvents](~~DescribeSuspEvents~~) operation to query the UUIDs of servers.
   * 
   * This parameter is required.
   * 
   * @example
   * 6f346617-eef9-45e6-b6d1-946xxxxxxxx
   */
  uuid?: string;
  /**
   * @remarks
   * The ID of the vertex.
   * 
   * This parameter is required.
   * 
   * @example
   * 03da4e2350a3eb50cd25a18cexxxxxxx
   */
  vertexId?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      from: 'From',
      incidentTime: 'IncidentTime',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      type: 'Type',
      uuid: 'Uuid',
      vertexId: 'VertexId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      from: 'string',
      incidentTime: 'number',
      lang: 'string',
      sourceIp: 'string',
      type: 'string',
      uuid: 'string',
      vertexId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

