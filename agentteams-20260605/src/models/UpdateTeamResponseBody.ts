// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTeamResponseBodyDataTeamMembers extends $dara.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTeamResponseBodyData extends $dara.Model {
  adminName?: string;
  createdAt?: string;
  description?: string;
  instanceId?: string;
  leaderName?: string;
  name?: string;
  teamMembers?: UpdateTeamResponseBodyDataTeamMembers[];
  updatedAt?: string;
  workerNames?: string[];
  static names(): { [key: string]: string } {
    return {
      adminName: 'AdminName',
      createdAt: 'CreatedAt',
      description: 'Description',
      instanceId: 'InstanceId',
      leaderName: 'LeaderName',
      name: 'Name',
      teamMembers: 'TeamMembers',
      updatedAt: 'UpdatedAt',
      workerNames: 'WorkerNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminName: 'string',
      createdAt: 'string',
      description: 'string',
      instanceId: 'string',
      leaderName: 'string',
      name: 'string',
      teamMembers: { 'type': 'array', 'itemType': UpdateTeamResponseBodyDataTeamMembers },
      updatedAt: 'string',
      workerNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.teamMembers)) {
      $dara.Model.validateArray(this.teamMembers);
    }
    if(Array.isArray(this.workerNames)) {
      $dara.Model.validateArray(this.workerNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTeamResponseBody extends $dara.Model {
  code?: string;
  data?: UpdateTeamResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateTeamResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

