// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTraceInfoDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the request source. Set the value to **sas**.
   * 
   * This parameter is required.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The timestamp of the detection. Unit: milliseconds.
   * 
   * @example
   * 1670555392000
   */
  incidentTime?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
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
   * 127.0.0.1
   */
  sourceIp?: string;
  /**
   * @remarks
   * The type of the vertex. Set the value to **SAS_INCIDENT**.
   * 
   * This parameter is required.
   * 
   * @example
   * SAS_INCIDENT
   */
  type?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * This parameter is required.
   * 
   * @example
   * 1627f2d7-aaa2-4ed1-b07a-xxxxxxxxxxxxxx
   */
  uuid?: string;
  /**
   * @remarks
   * Vertex ID, which can be obtained from the AlarmUniqueInfo in the response of the [DescribeSuspEvents](~~DescribeSuspEvents~~) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * cce1d28dxxxxxxxxxxxxxxxx
   */
  vertexId?: string;
  static names(): { [key: string]: string } {
    return {
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

