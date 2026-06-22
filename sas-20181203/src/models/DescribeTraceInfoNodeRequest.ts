// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTraceInfoNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The event name.
   * 
   * >For more information, call the [DescribeSuspEvents](~~DescribeSuspEvents~~) operation to obtain this parameter.
   * 
   * @example
   * WEBSHELL
   */
  eventName?: string;
  /**
   * @remarks
   * The source identifier of the request. Set the value to sas.
   * 
   * This parameter is required.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The time when the event was first detected.
   * 
   * @example
   * 1635978934000
   */
  incidentTime?: number;
  /**
   * @remarks
   * The language type of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request. You do not need to specify this parameter. The system automatically obtains the value.
   * 
   * @example
   * 127.0.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The vertex type. You can call the [DescribeTraceInfoDetail](~~DescribeTraceInfoDetail~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * SAS_ASSET
   */
  type?: string;
  /**
   * @remarks
   * The UUID of the server to query. You can call the [DescribeSuspEvents](~~DescribeSuspEvents~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 6f346617-eef9-45e6-b6d1-946xxxxxxxx
   */
  uuid?: string;
  /**
   * @remarks
   * The vertex ID.
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

