// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogAnalysisResponseBodyAnalysesAnalysisMetaValue extends $dara.Model {
  /**
   * @remarks
   * The name of the dedicated Logstore that is used to store NAS operation logs.
   * 
   * @example
   * nas-nfs
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the project where the dedicated Logstore resides.
   * 
   * @example
   * nas-1746495857602745-cn-hangzhou
   */
  project?: string;
  /**
   * @remarks
   * The region where the dedicated Logstore resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The role that is used by NAS to access Simple Log Service.
   * 
   * @example
   * acs:ram::162165525211xxxx:role/aliyunnaslogarchiverole
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'Logstore',
      project: 'Project',
      region: 'Region',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      project: 'string',
      region: 'string',
      roleArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogAnalysisResponseBodyAnalysesAnalysis extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 0c7154xxxx
   */
  metaKey?: string;
  /**
   * @remarks
   * The log dump information of the file system.
   */
  metaValue?: DescribeLogAnalysisResponseBodyAnalysesAnalysisMetaValue;
  static names(): { [key: string]: string } {
    return {
      metaKey: 'MetaKey',
      metaValue: 'MetaValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaKey: 'string',
      metaValue: DescribeLogAnalysisResponseBodyAnalysesAnalysisMetaValue,
    };
  }

  validate() {
    if(this.metaValue && typeof (this.metaValue as any).validate === 'function') {
      (this.metaValue as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogAnalysisResponseBodyAnalyses extends $dara.Model {
  analysis?: DescribeLogAnalysisResponseBodyAnalysesAnalysis[];
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: { 'type': 'array', 'itemType': DescribeLogAnalysisResponseBodyAnalysesAnalysis },
    };
  }

  validate() {
    if(Array.isArray(this.analysis)) {
      $dara.Model.validateArray(this.analysis);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogAnalysisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of log dump information.
   */
  analyses?: DescribeLogAnalysisResponseBodyAnalyses;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of log dump entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C84F77AF-3DE5-48F1-B19B-37FCBE24****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of log dump entries in the region.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      analyses: 'Analyses',
      code: 'Code',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyses: DescribeLogAnalysisResponseBodyAnalyses,
      code: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.analyses && typeof (this.analyses as any).validate === 'function') {
      (this.analyses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

