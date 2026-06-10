// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AppServiceGroup } from "./AppServiceGroup";
import { TreeNode } from "./TreeNode";
import { AppOperationAddress } from "./AppOperationAddress";
import { AppServiceProfile } from "./AppServiceProfile";


export class AppServiceAggregate extends $dara.Model {
  bizId?: string;
  deleted?: number;
  endTime?: string;
  espBizId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  group?: AppServiceGroup;
  instanceBizId?: string;
  name?: string;
  nodeList?: TreeNode[];
  operationAddress?: AppOperationAddress;
  profile?: AppServiceProfile;
  serviceType?: string;
  serviceTypeText?: string;
  slug?: string;
  startTime?: string;
  status?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      deleted: 'Deleted',
      endTime: 'EndTime',
      espBizId: 'EspBizId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      group: 'Group',
      instanceBizId: 'InstanceBizId',
      name: 'Name',
      nodeList: 'NodeList',
      operationAddress: 'OperationAddress',
      profile: 'Profile',
      serviceType: 'ServiceType',
      serviceTypeText: 'ServiceTypeText',
      slug: 'Slug',
      startTime: 'StartTime',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      deleted: 'number',
      endTime: 'string',
      espBizId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      group: AppServiceGroup,
      instanceBizId: 'string',
      name: 'string',
      nodeList: { 'type': 'array', 'itemType': TreeNode },
      operationAddress: AppOperationAddress,
      profile: AppServiceProfile,
      serviceType: 'string',
      serviceTypeText: 'string',
      slug: 'string',
      startTime: 'string',
      status: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.group && typeof (this.group as any).validate === 'function') {
      (this.group as any).validate();
    }
    if(Array.isArray(this.nodeList)) {
      $dara.Model.validateArray(this.nodeList);
    }
    if(this.operationAddress && typeof (this.operationAddress as any).validate === 'function') {
      (this.operationAddress as any).validate();
    }
    if(this.profile && typeof (this.profile as any).validate === 'function') {
      (this.profile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

