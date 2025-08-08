// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityProjectLogResponseBodyData extends $dara.Model {
  actionData?: string;
  actionTime?: string;
  actionType?: string;
  projectCreateTime?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      actionData: 'ActionData',
      actionTime: 'ActionTime',
      actionType: 'ActionType',
      projectCreateTime: 'ProjectCreateTime',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionData: 'string',
      actionTime: 'string',
      actionType: 'string',
      projectCreateTime: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectLogResponseBody extends $dara.Model {
  code?: string;
  data?: GetQualityProjectLogResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetQualityProjectLogResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

