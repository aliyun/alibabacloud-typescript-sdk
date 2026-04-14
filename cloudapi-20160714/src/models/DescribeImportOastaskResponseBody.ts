// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImportOASTaskResponseBodyApiResultsApiResult extends $dara.Model {
  apiId?: string;
  apiName?: string;
  description?: string;
  errorMessage?: string;
  groupId?: string;
  method?: string;
  path?: string;
  updateStatus?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      description: 'Description',
      errorMessage: 'ErrorMessage',
      groupId: 'GroupId',
      method: 'Method',
      path: 'Path',
      updateStatus: 'UpdateStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      description: 'string',
      errorMessage: 'string',
      groupId: 'string',
      method: 'string',
      path: 'string',
      updateStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportOASTaskResponseBodyApiResults extends $dara.Model {
  apiResult?: DescribeImportOASTaskResponseBodyApiResultsApiResult[];
  static names(): { [key: string]: string } {
    return {
      apiResult: 'ApiResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiResult: { 'type': 'array', 'itemType': DescribeImportOASTaskResponseBodyApiResultsApiResult },
    };
  }

  validate() {
    if(Array.isArray(this.apiResult)) {
      $dara.Model.validateArray(this.apiResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportOASTaskResponseBodyModelResultsModelResult extends $dara.Model {
  errorMessage?: string;
  groupId?: string;
  modelId?: string;
  modelName?: string;
  updateStatus?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      groupId: 'GroupId',
      modelId: 'ModelId',
      modelName: 'ModelName',
      updateStatus: 'UpdateStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      groupId: 'string',
      modelId: 'string',
      modelName: 'string',
      updateStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportOASTaskResponseBodyModelResults extends $dara.Model {
  modelResult?: DescribeImportOASTaskResponseBodyModelResultsModelResult[];
  static names(): { [key: string]: string } {
    return {
      modelResult: 'ModelResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelResult: { 'type': 'array', 'itemType': DescribeImportOASTaskResponseBodyModelResultsModelResult },
    };
  }

  validate() {
    if(Array.isArray(this.modelResult)) {
      $dara.Model.validateArray(this.modelResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportOASTaskResponseBody extends $dara.Model {
  apiResults?: DescribeImportOASTaskResponseBodyApiResults;
  modelResults?: DescribeImportOASTaskResponseBodyModelResults;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CE5722A6-AE78-4741-A9B0-6C817D360510
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the import task. Valid values:
   * 
   * *   Running
   * *   Finished
   * 
   * @example
   * Finished
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      apiResults: 'ApiResults',
      modelResults: 'ModelResults',
      requestId: 'RequestId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiResults: DescribeImportOASTaskResponseBodyApiResults,
      modelResults: DescribeImportOASTaskResponseBodyModelResults,
      requestId: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    if(this.apiResults && typeof (this.apiResults as any).validate === 'function') {
      (this.apiResults as any).validate();
    }
    if(this.modelResults && typeof (this.modelResults as any).validate === 'function') {
      (this.modelResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

