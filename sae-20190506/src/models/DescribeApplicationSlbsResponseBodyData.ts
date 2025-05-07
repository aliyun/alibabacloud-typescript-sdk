// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApplicationSlbsResponseBodyDataInternet } from "./DescribeApplicationSlbsResponseBodyDataInternet";
import { DescribeApplicationSlbsResponseBodyDataIntranet } from "./DescribeApplicationSlbsResponseBodyDataIntranet";


export class DescribeApplicationSlbsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The configurations of the Internet-facing SLB instance.
   */
  internet?: DescribeApplicationSlbsResponseBodyDataInternet[];
  /**
   * @remarks
   * The ID of the Internet-facing SLB instance.
   * 
   * @example
   * ``59.74.**.**``
   */
  internetIp?: string;
  /**
   * @example
   * PayBySpec
   */
  internetSlbChargeType?: string;
  /**
   * @example
   * false
   */
  internetSlbExpired?: boolean;
  /**
   * @remarks
   * Configurations of Internet-facing SLB instances.
   * 
   * @example
   * lb-uf6xc7wybefehnv45****
   */
  internetSlbId?: string;
  /**
   * @remarks
   * The configurations of the internal-facing SLB instance.
   */
  intranet?: DescribeApplicationSlbsResponseBodyDataIntranet[];
  /**
   * @remarks
   * The error code.
   * 
   * *   The **ErrorCode** parameter is not returned when the request succeeds.
   * *   The **ErrorCode** parameter is returned when the request fails. For more information, see **Error codes** in this topic.
   * 
   * @example
   * 192.168.0.0
   */
  intranetIp?: string;
  /**
   * @example
   * PayBySpec
   */
  intranetSlbChargeType?: string;
  /**
   * @example
   * false
   */
  intranetSlbExpired?: boolean;
  /**
   * @remarks
   * The IP address of the internal-facing SLB instance.
   * 
   * @example
   * lb-uf6xc7wybefehnv45****
   */
  intranetSlbId?: string;
  static names(): { [key: string]: string } {
    return {
      internet: 'Internet',
      internetIp: 'InternetIp',
      internetSlbChargeType: 'InternetSlbChargeType',
      internetSlbExpired: 'InternetSlbExpired',
      internetSlbId: 'InternetSlbId',
      intranet: 'Intranet',
      intranetIp: 'IntranetIp',
      intranetSlbChargeType: 'IntranetSlbChargeType',
      intranetSlbExpired: 'IntranetSlbExpired',
      intranetSlbId: 'IntranetSlbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internet: { 'type': 'array', 'itemType': DescribeApplicationSlbsResponseBodyDataInternet },
      internetIp: 'string',
      internetSlbChargeType: 'string',
      internetSlbExpired: 'boolean',
      internetSlbId: 'string',
      intranet: { 'type': 'array', 'itemType': DescribeApplicationSlbsResponseBodyDataIntranet },
      intranetIp: 'string',
      intranetSlbChargeType: 'string',
      intranetSlbExpired: 'boolean',
      intranetSlbId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.internet)) {
      $dara.Model.validateArray(this.internet);
    }
    if(Array.isArray(this.intranet)) {
      $dara.Model.validateArray(this.intranet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

