// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileDeepAnalyzeRequest extends $dara.Model {
  /**
   * @remarks
   * The request context information.
   * 
   * @example
   * {}
   */
  context?: string;
  /**
   * @remarks
   * The event ID. If a file-related alert event already exists, you can use this parameter to trigger deep analysis.
   * 
   * @example
   * 100000001
   */
  eventId?: number;
  /**
   * @remarks
   * The file hash. If the file already exists in the cloud, you can use this parameter to trigger deep analysis.
   * 
   * @example
   * d41d8cd98f00b204e9800998ecf8427e
   */
  hash?: string;
  /**
   * @remarks
   * The request source. The system verifies the purchased edition based on the request source. Valid values:
   * 
   * - **edr**: AgenticEDR
   * 
   * - **secOpsAgent**: Security O&M agent
   * 
   * @example
   * edr
   */
  source?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      eventId: 'EventId',
      hash: 'Hash',
      source: 'Source',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
      eventId: 'number',
      hash: 'string',
      source: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

