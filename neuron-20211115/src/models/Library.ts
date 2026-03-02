// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Library extends $dara.Model {
  artifactId?: string;
  assetType?: string;
  company?: string;
  companyId?: number;
  dependCount?: number;
  description?: string;
  groupId?: string;
  id?: number;
  industry?: string;
  isWatched?: boolean;
  name?: string;
  provider?: string;
  providerName?: string;
  repoUrl?: string;
  requestId?: string;
  reviewId?: number;
  status?: string;
  stepStatus?: string;
  watchCount?: number;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'artifactId',
      assetType: 'assetType',
      company: 'company',
      companyId: 'companyId',
      dependCount: 'dependCount',
      description: 'description',
      groupId: 'groupId',
      id: 'id',
      industry: 'industry',
      isWatched: 'isWatched',
      name: 'name',
      provider: 'provider',
      providerName: 'providerName',
      repoUrl: 'repoUrl',
      requestId: 'requestId',
      reviewId: 'reviewId',
      status: 'status',
      stepStatus: 'stepStatus',
      watchCount: 'watchCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      assetType: 'string',
      company: 'string',
      companyId: 'number',
      dependCount: 'number',
      description: 'string',
      groupId: 'string',
      id: 'number',
      industry: 'string',
      isWatched: 'boolean',
      name: 'string',
      provider: 'string',
      providerName: 'string',
      repoUrl: 'string',
      requestId: 'string',
      reviewId: 'number',
      status: 'string',
      stepStatus: 'string',
      watchCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

