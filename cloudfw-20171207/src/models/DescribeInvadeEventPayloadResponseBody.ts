// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvadeEventPayloadResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the asset to which the event belongs.
   * 
   * @example
   * i-uf6faknmuby7ezht****
   */
  assetsInstanceId?: string;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * fadd-dfdd-****
   */
  eventUuid?: string;
  /**
   * @remarks
   * The end position (character index) of the matched content in the payload.
   * 
   * @example
   * 0
   */
  highlightEnd?: number;
  /**
   * @remarks
   * The start position (character index) of the matched content in the payload.
   * 
   * @example
   * 0
   */
  highlightStart?: number;
  /**
   * @remarks
   * The original packet payload of the intrusion event.
   * 
   * @example
   * 302902010004067075626c6963a01c0204036a5f43020100020100300e300c06082b060102010101000500
   */
  payload?: string;
  /**
   * @remarks
   * The length of the payload in bytes.
   * 
   * @example
   * 457
   */
  payloadLen?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B14757D0-4640-4B44-AC67-7F558FE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assetsInstanceId: 'AssetsInstanceId',
      eventUuid: 'EventUuid',
      highlightEnd: 'HighlightEnd',
      highlightStart: 'HighlightStart',
      payload: 'Payload',
      payloadLen: 'PayloadLen',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsInstanceId: 'string',
      eventUuid: 'string',
      highlightEnd: 'number',
      highlightStart: 'number',
      payload: 'string',
      payloadLen: 'number',
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

