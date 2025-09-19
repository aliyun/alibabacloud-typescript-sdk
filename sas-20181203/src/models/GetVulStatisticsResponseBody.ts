// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVulStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 3FE272FA-7263-4554-A90F-A7857945A6D5
   */
  requestId?: string;
  /**
   * @remarks
   * The number of vulnerabilities that have the high priority.
   * 
   * @example
   * 16
   */
  vulAsapSum?: number;
  /**
   * @remarks
   * The number of vulnerabilities that have the medium priority.
   * 
   * @example
   * 0
   */
  vulLaterSum?: number;
  /**
   * @remarks
   * The number of vulnerabilities that have the low priority.
   * 
   * @example
   * 0
   */
  vulNntfSum?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vulAsapSum: 'VulAsapSum',
      vulLaterSum: 'VulLaterSum',
      vulNntfSum: 'VulNntfSum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vulAsapSum: 'number',
      vulLaterSum: 'number',
      vulNntfSum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

