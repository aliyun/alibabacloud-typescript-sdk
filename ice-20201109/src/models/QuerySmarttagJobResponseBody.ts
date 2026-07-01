// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmarttagJobResponseBodyResultsResult extends $dara.Model {
  data?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmarttagJobResponseBodyResults extends $dara.Model {
  result?: QuerySmarttagJobResponseBodyResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': QuerySmarttagJobResponseBodyResultsResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmarttagJobResponseBodyUsagesUsage extends $dara.Model {
  quota?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmarttagJobResponseBodyUsages extends $dara.Model {
  usage?: QuerySmarttagJobResponseBodyUsagesUsage[];
  static names(): { [key: string]: string } {
    return {
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usage: { 'type': 'array', 'itemType': QuerySmarttagJobResponseBodyUsagesUsage },
    };
  }

  validate() {
    if(Array.isArray(this.usage)) {
      $dara.Model.validateArray(this.usage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmarttagJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * - **Success**: The job was successful.
   * 
   * - **Fail**: The job failed.
   * 
   * - **Processing**: The job is in progress.
   * 
   * - **Submitted**: The job is queued for processing.
   * 
   * @example
   * Success
   */
  jobStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  results?: QuerySmarttagJobResponseBodyResults;
  usages?: QuerySmarttagJobResponseBodyUsages;
  /**
   * @remarks
   * The custom data passed through the MNS callback. For details on the message format, see the callback message format definitions below.
   * 
   * @example
   * {"userId":"123432412831"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      jobStatus: 'JobStatus',
      requestId: 'RequestId',
      results: 'Results',
      usages: 'Usages',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobStatus: 'string',
      requestId: 'string',
      results: QuerySmarttagJobResponseBodyResults,
      usages: QuerySmarttagJobResponseBodyUsages,
      userData: 'string',
    };
  }

  validate() {
    if(this.results && typeof (this.results as any).validate === 'function') {
      (this.results as any).validate();
    }
    if(this.usages && typeof (this.usages as any).validate === 'function') {
      (this.usages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

