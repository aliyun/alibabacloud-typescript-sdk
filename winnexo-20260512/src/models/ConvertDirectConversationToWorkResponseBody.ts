// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertDirectConversationToWorkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The session conversion record ID.
   * 
   * @example
   * exampleConversionId
   */
  conversionId?: string;
  /**
   * @remarks
   * The number of converted conversation turns.
   * 
   * @example
   * 2
   */
  convertedRounds?: number;
  /**
   * @remarks
   * The scope of the converted historical messages.
   * 
   * @example
   * direct
   */
  historyScope?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether retries are supported.
   * 
   * @example
   * false
   */
  retryable?: boolean;
  /**
   * @remarks
   * The source session version identifier.
   * 
   * @example
   * 0
   */
  sourceEpoch?: number;
  /**
   * @remarks
   * The source session ID.
   * 
   * @example
   * exampleSourceSessionId
   */
  sourceSessionId?: string;
  /**
   * @remarks
   * The conversion status.
   * 
   * @example
   * succeeded
   */
  status?: string;
  /**
   * @remarks
   * The target work session ID.
   * 
   * @example
   * exampleTargetSessionId
   */
  targetSessionId?: string;
  /**
   * @remarks
   * The cutoff message sequence number for the conversion.
   * 
   * @example
   * 2
   */
  throughSequence?: number;
  /**
   * @remarks
   * The work session mode.
   * 
   * @example
   * work
   */
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      conversionId: 'conversionId',
      convertedRounds: 'convertedRounds',
      historyScope: 'historyScope',
      message: 'message',
      requestId: 'requestId',
      retryable: 'retryable',
      sourceEpoch: 'sourceEpoch',
      sourceSessionId: 'sourceSessionId',
      status: 'status',
      targetSessionId: 'targetSessionId',
      throughSequence: 'throughSequence',
      workMode: 'workMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      conversionId: 'string',
      convertedRounds: 'number',
      historyScope: 'string',
      message: 'string',
      requestId: 'string',
      retryable: 'boolean',
      sourceEpoch: 'number',
      sourceSessionId: 'string',
      status: 'string',
      targetSessionId: 'string',
      throughSequence: 'number',
      workMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

