// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopCrawlerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the metadata crawler.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The request ID. Used to locate logs and troubleshoot issues.
   * 
   * @example
   * 9252F32F-D855-549E-8898-61CF5A733050
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the stop request was accepted. A value of true indicates that the request was accepted. Call ListCrawlerRuns to confirm the final run status.
   */
  stopAccepted?: boolean;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
      stopAccepted: 'StopAccepted',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
      stopAccepted: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

