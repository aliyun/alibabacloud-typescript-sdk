// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListZkTrackRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The end timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1669619383
   */
  endTs?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mse-cn-0ju2yq****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The path.
   * 
   * @example
   * /path
   */
  path?: string;
  /**
   * @remarks
   * The request parameters.
   * 
   * @example
   * {}
   */
  requestPars?: string;
  /**
   * @remarks
   * Specifies whether to enable reverse ordering.
   * 
   * @example
   * false
   */
  reverse?: boolean;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 0x301fdfbdbf00***
   */
  sessionId?: string;
  /**
   * @remarks
   * The start timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1669618483
   */
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      endTs: 'EndTs',
      instanceId: 'InstanceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      path: 'Path',
      requestPars: 'RequestPars',
      reverse: 'Reverse',
      sessionId: 'SessionId',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      endTs: 'number',
      instanceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      path: 'string',
      requestPars: 'string',
      reverse: 'boolean',
      sessionId: 'string',
      startTs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

