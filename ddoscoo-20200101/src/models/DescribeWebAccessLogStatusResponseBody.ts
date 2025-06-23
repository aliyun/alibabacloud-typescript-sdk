// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebAccessLogStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @remarks
   * The Logstore of the instance.
   * 
   * @example
   * ddoscoo-logstore
   */
  slsLogstore?: string;
  /**
   * @remarks
   * The Log Service project of the instance.
   * 
   * @example
   * ddoscoo-project-128965410602****-cn-hangzhou
   */
  slsProject?: string;
  /**
   * @remarks
   * Indicates whether the Log Analysis feature is enabled for the website. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
   * 
   * @example
   * true
   */
  slsStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsLogstore: 'SlsLogstore',
      slsProject: 'SlsProject',
      slsStatus: 'SlsStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsLogstore: 'string',
      slsProject: 'string',
      slsStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

