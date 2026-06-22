// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterImageSecuritySummaryResponseBodyClusterImageEventImageBaseline extends $dara.Model {
  /**
   * @remarks
   * The number of baselines.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * - **high**: High.
   * - **medium**: Medium.
   * - **low**: Low.
   * 
   * @example
   * medium
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      riskLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterImageSecuritySummaryResponseBodyClusterImageEventImageCveVul extends $dara.Model {
  /**
   * @remarks
   * The number of vulnerabilities.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The warning level. Valid values:
   * 
   * - **asap**: High. Fix the vulnerability at the earliest opportunity.
   * - **nntf**: Medium. The vulnerability can be temporarily left unfixed.
   * - **later**: Low. The vulnerability can be left unfixed.
   * 
   * @example
   * later
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      riskLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterImageSecuritySummaryResponseBodyClusterImageEventImageMaliciousFile extends $dara.Model {
  /**
   * @remarks
   * The number of malicious samples.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * - **high**: High.
   * - **medium**: Medium.
   * - **low**: Low.
   * 
   * @example
   * medium
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      riskLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterImageSecuritySummaryResponseBodyClusterImageEventImageScaVul extends $dara.Model {
  /**
   * @remarks
   * The number of application vulnerabilities.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The warning level. Valid values:
   * 
   * - **asap**: High. Fix the vulnerability at the earliest opportunity.
   * - **nntf**: Medium. The vulnerability can be temporarily left unfixed.
   * - **later**: Low. The vulnerability can be left unfixed.
   * 
   * @example
   * later
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      riskLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterImageSecuritySummaryResponseBodyClusterImageEvent extends $dara.Model {
  /**
   * @remarks
   * The image baseline check information.
   */
  imageBaseline?: DescribeClusterImageSecuritySummaryResponseBodyClusterImageEventImageBaseline[];
  /**
   * @remarks
   * The image system vulnerability information.
   */
  imageCveVul?: DescribeClusterImageSecuritySummaryResponseBodyClusterImageEventImageCveVul[];
  /**
   * @remarks
   * The image malicious sample information.
   */
  imageMaliciousFile?: DescribeClusterImageSecuritySummaryResponseBodyClusterImageEventImageMaliciousFile[];
  /**
   * @remarks
   * The image application vulnerability information.
   */
  imageScaVul?: DescribeClusterImageSecuritySummaryResponseBodyClusterImageEventImageScaVul[];
  static names(): { [key: string]: string } {
    return {
      imageBaseline: 'ImageBaseline',
      imageCveVul: 'ImageCveVul',
      imageMaliciousFile: 'ImageMaliciousFile',
      imageScaVul: 'ImageScaVul',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageBaseline: { 'type': 'array', 'itemType': DescribeClusterImageSecuritySummaryResponseBodyClusterImageEventImageBaseline },
      imageCveVul: { 'type': 'array', 'itemType': DescribeClusterImageSecuritySummaryResponseBodyClusterImageEventImageCveVul },
      imageMaliciousFile: { 'type': 'array', 'itemType': DescribeClusterImageSecuritySummaryResponseBodyClusterImageEventImageMaliciousFile },
      imageScaVul: { 'type': 'array', 'itemType': DescribeClusterImageSecuritySummaryResponseBodyClusterImageEventImageScaVul },
    };
  }

  validate() {
    if(Array.isArray(this.imageBaseline)) {
      $dara.Model.validateArray(this.imageBaseline);
    }
    if(Array.isArray(this.imageCveVul)) {
      $dara.Model.validateArray(this.imageCveVul);
    }
    if(Array.isArray(this.imageMaliciousFile)) {
      $dara.Model.validateArray(this.imageMaliciousFile);
    }
    if(Array.isArray(this.imageScaVul)) {
      $dara.Model.validateArray(this.imageScaVul);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterImageSecuritySummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The image security event information.
   */
  clusterImageEvent?: DescribeClusterImageSecuritySummaryResponseBodyClusterImageEvent;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8B6F758-BCD4-597A-8A2C-DA5A552C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterImageEvent: 'ClusterImageEvent',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterImageEvent: DescribeClusterImageSecuritySummaryResponseBodyClusterImageEvent,
      requestId: 'string',
    };
  }

  validate() {
    if(this.clusterImageEvent && typeof (this.clusterImageEvent as any).validate === 'function') {
      (this.clusterImageEvent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

