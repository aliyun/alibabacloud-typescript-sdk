// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIspTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The line types of EIPs in the acceleration region.
   * 
   * *   **BGP** (default): BGP (Multi-ISP) lines
   * *   **BGP_PRO**: BGP (Multi-ISP) Pro lines
   * 
   * If you have the permissions to use single-ISP bandwidth, one of the following values may be returned:
   * 
   * *   **ChinaTelecom**: China Telecom (single ISP)
   * *   **ChinaUnicom**: China Unicom (single ISP)
   * *   **ChinaMobile**: China Mobile (single ISP)
   * *   **ChinaTelecom_L2**: China Telecom_L2 (single ISP)
   * *   **ChinaUnicom_L2**: China Unicom_L2 (single ISP)
   * *   **ChinaMobile_L2**: China Mobile_L2 (single ISP)
   * 
   * > Different acceleration regions support different single-ISP BGP lines.
   */
  ispTypeList?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F591955F-5CB5-4CCE-A75D-17CF2085CE22
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ispTypeList: 'IspTypeList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispTypeList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ispTypeList)) {
      $dara.Model.validateArray(this.ispTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

