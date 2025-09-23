// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainSlsStatusResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @example
   * ddoscoo-logstore
   */
  slsLogstore?: string;
  /**
   * @example
   * ddoscoo-project-xxxx-cn-hangzhou
   */
  slsProject?: string;
  /**
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

