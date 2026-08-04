// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDeleteTaskCheckDataResponseBodyTaskCheckDataDtoList extends $dara.Model {
  checkerDesc?: string;
  checkerName?: string;
  checkerUniKey?: string;
  dependencyLevel?: string;
  static names(): { [key: string]: string } {
    return {
      checkerDesc: 'CheckerDesc',
      checkerName: 'CheckerName',
      checkerUniKey: 'CheckerUniKey',
      dependencyLevel: 'DependencyLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkerDesc: 'string',
      checkerName: 'string',
      checkerUniKey: 'string',
      dependencyLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeleteTaskCheckDataResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskCheckDataDtoList?: QueryDeleteTaskCheckDataResponseBodyTaskCheckDataDtoList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskCheckDataDtoList: 'TaskCheckDataDtoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskCheckDataDtoList: { 'type': 'array', 'itemType': QueryDeleteTaskCheckDataResponseBodyTaskCheckDataDtoList },
    };
  }

  validate() {
    if(Array.isArray(this.taskCheckDataDtoList)) {
      $dara.Model.validateArray(this.taskCheckDataDtoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

