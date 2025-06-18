// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEventStreamingRequestSinkSinkDorisParametersBeHttpEndpoint } from "./UpdateEventStreamingRequestSinkSinkDorisParametersBeHttpEndpoint";
import { UpdateEventStreamingRequestSinkSinkDorisParametersBody } from "./UpdateEventStreamingRequestSinkSinkDorisParametersBody";
import { UpdateEventStreamingRequestSinkSinkDorisParametersDatabase } from "./UpdateEventStreamingRequestSinkSinkDorisParametersDatabase";
import { UpdateEventStreamingRequestSinkSinkDorisParametersFeHttpEndpoint } from "./UpdateEventStreamingRequestSinkSinkDorisParametersFeHttpEndpoint";
import { UpdateEventStreamingRequestSinkSinkDorisParametersNetworkType } from "./UpdateEventStreamingRequestSinkSinkDorisParametersNetworkType";
import { UpdateEventStreamingRequestSinkSinkDorisParametersPassword } from "./UpdateEventStreamingRequestSinkSinkDorisParametersPassword";
import { UpdateEventStreamingRequestSinkSinkDorisParametersQueryEndpoint } from "./UpdateEventStreamingRequestSinkSinkDorisParametersQueryEndpoint";
import { UpdateEventStreamingRequestSinkSinkDorisParametersSecurityGroupId } from "./UpdateEventStreamingRequestSinkSinkDorisParametersSecurityGroupId";
import { UpdateEventStreamingRequestSinkSinkDorisParametersTable } from "./UpdateEventStreamingRequestSinkSinkDorisParametersTable";
import { UpdateEventStreamingRequestSinkSinkDorisParametersUserName } from "./UpdateEventStreamingRequestSinkSinkDorisParametersUserName";
import { UpdateEventStreamingRequestSinkSinkDorisParametersVSwitchIds } from "./UpdateEventStreamingRequestSinkSinkDorisParametersVswitchIds";
import { UpdateEventStreamingRequestSinkSinkDorisParametersVpcId } from "./UpdateEventStreamingRequestSinkSinkDorisParametersVpcId";


export class UpdateEventStreamingRequestSinkSinkDorisParameters extends $dara.Model {
  beHttpEndpoint?: UpdateEventStreamingRequestSinkSinkDorisParametersBeHttpEndpoint;
  body?: UpdateEventStreamingRequestSinkSinkDorisParametersBody;
  database?: UpdateEventStreamingRequestSinkSinkDorisParametersDatabase;
  feHttpEndpoint?: UpdateEventStreamingRequestSinkSinkDorisParametersFeHttpEndpoint;
  networkType?: UpdateEventStreamingRequestSinkSinkDorisParametersNetworkType;
  password?: UpdateEventStreamingRequestSinkSinkDorisParametersPassword;
  queryEndpoint?: UpdateEventStreamingRequestSinkSinkDorisParametersQueryEndpoint;
  securityGroupId?: UpdateEventStreamingRequestSinkSinkDorisParametersSecurityGroupId;
  table?: UpdateEventStreamingRequestSinkSinkDorisParametersTable;
  userName?: UpdateEventStreamingRequestSinkSinkDorisParametersUserName;
  vSwitchIds?: UpdateEventStreamingRequestSinkSinkDorisParametersVSwitchIds;
  vpcId?: UpdateEventStreamingRequestSinkSinkDorisParametersVpcId;
  static names(): { [key: string]: string } {
    return {
      beHttpEndpoint: 'BeHttpEndpoint',
      body: 'Body',
      database: 'Database',
      feHttpEndpoint: 'FeHttpEndpoint',
      networkType: 'NetworkType',
      password: 'Password',
      queryEndpoint: 'QueryEndpoint',
      securityGroupId: 'SecurityGroupId',
      table: 'Table',
      userName: 'UserName',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beHttpEndpoint: UpdateEventStreamingRequestSinkSinkDorisParametersBeHttpEndpoint,
      body: UpdateEventStreamingRequestSinkSinkDorisParametersBody,
      database: UpdateEventStreamingRequestSinkSinkDorisParametersDatabase,
      feHttpEndpoint: UpdateEventStreamingRequestSinkSinkDorisParametersFeHttpEndpoint,
      networkType: UpdateEventStreamingRequestSinkSinkDorisParametersNetworkType,
      password: UpdateEventStreamingRequestSinkSinkDorisParametersPassword,
      queryEndpoint: UpdateEventStreamingRequestSinkSinkDorisParametersQueryEndpoint,
      securityGroupId: UpdateEventStreamingRequestSinkSinkDorisParametersSecurityGroupId,
      table: UpdateEventStreamingRequestSinkSinkDorisParametersTable,
      userName: UpdateEventStreamingRequestSinkSinkDorisParametersUserName,
      vSwitchIds: UpdateEventStreamingRequestSinkSinkDorisParametersVSwitchIds,
      vpcId: UpdateEventStreamingRequestSinkSinkDorisParametersVpcId,
    };
  }

  validate() {
    if(this.beHttpEndpoint && typeof (this.beHttpEndpoint as any).validate === 'function') {
      (this.beHttpEndpoint as any).validate();
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    if(this.database && typeof (this.database as any).validate === 'function') {
      (this.database as any).validate();
    }
    if(this.feHttpEndpoint && typeof (this.feHttpEndpoint as any).validate === 'function') {
      (this.feHttpEndpoint as any).validate();
    }
    if(this.networkType && typeof (this.networkType as any).validate === 'function') {
      (this.networkType as any).validate();
    }
    if(this.password && typeof (this.password as any).validate === 'function') {
      (this.password as any).validate();
    }
    if(this.queryEndpoint && typeof (this.queryEndpoint as any).validate === 'function') {
      (this.queryEndpoint as any).validate();
    }
    if(this.securityGroupId && typeof (this.securityGroupId as any).validate === 'function') {
      (this.securityGroupId as any).validate();
    }
    if(this.table && typeof (this.table as any).validate === 'function') {
      (this.table as any).validate();
    }
    if(this.userName && typeof (this.userName as any).validate === 'function') {
      (this.userName as any).validate();
    }
    if(this.vSwitchIds && typeof (this.vSwitchIds as any).validate === 'function') {
      (this.vSwitchIds as any).validate();
    }
    if(this.vpcId && typeof (this.vpcId as any).validate === 'function') {
      (this.vpcId as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

