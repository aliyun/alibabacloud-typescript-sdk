// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAgRelationCountAndQuotaRequest extends $dara.Model {
  appName?: string;
  callerBid?: number;
  callerParentId?: number;
  callerType?: string;
  callerUid?: number;
  mpk?: string;
  nullObject?: boolean;
  requestId?: string;
  securityToken?: string;
  sourceIp?: string;
  stsTokenCallerBid?: number;
  stsTokenCallerUid?: number;
  stsTokenRoleId?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      callerBid: 'CallerBid',
      callerParentId: 'CallerParentId',
      callerType: 'CallerType',
      callerUid: 'CallerUid',
      mpk: 'Mpk',
      nullObject: 'NullObject',
      requestId: 'RequestId',
      securityToken: 'SecurityToken',
      sourceIp: 'SourceIp',
      stsTokenCallerBid: 'StsTokenCallerBid',
      stsTokenCallerUid: 'StsTokenCallerUid',
      stsTokenRoleId: 'StsTokenRoleId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      callerBid: 'number',
      callerParentId: 'number',
      callerType: 'string',
      callerUid: 'number',
      mpk: 'string',
      nullObject: 'boolean',
      requestId: 'string',
      securityToken: 'string',
      sourceIp: 'string',
      stsTokenCallerBid: 'number',
      stsTokenCallerUid: 'number',
      stsTokenRoleId: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

