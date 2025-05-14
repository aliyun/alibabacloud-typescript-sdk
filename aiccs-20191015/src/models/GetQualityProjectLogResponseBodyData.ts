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

