// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticSpacesResponseBodyAgenticSpacesAgenticSpaceQuota extends $dara.Model {
  fileCountLimit?: number;
  sizeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      fileCountLimit: 'FileCountLimit',
      sizeLimit: 'SizeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileCountLimit: 'number',
      sizeLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAgenticSpacesResponseBodyAgenticSpacesAgenticSpace extends $dara.Model {
  agenticSpaceId?: string;
  azone?: string;
  createTimeUtc?: string;
  description?: string;
  fileCountUsage?: number;
  fileSystemId?: string;
  fileSystemPath?: string;
  quota?: DescribeAgenticSpacesResponseBodyAgenticSpacesAgenticSpaceQuota;
  spaceUsage?: number;
  status?: string;
  updateTimeUtc?: string;
  static names(): { [key: string]: string } {
    return {
      agenticSpaceId: 'AgenticSpaceId',
      azone: 'Azone',
      createTimeUtc: 'CreateTimeUtc',
      description: 'Description',
      fileCountUsage: 'FileCountUsage',
      fileSystemId: 'FileSystemId',
      fileSystemPath: 'FileSystemPath',
      quota: 'Quota',
      spaceUsage: 'SpaceUsage',
      status: 'Status',
      updateTimeUtc: 'UpdateTimeUtc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agenticSpaceId: 'string',
      azone: 'string',
      createTimeUtc: 'string',
      description: 'string',
      fileCountUsage: 'number',
      fileSystemId: 'string',
      fileSystemPath: 'string',
      quota: DescribeAgenticSpacesResponseBodyAgenticSpacesAgenticSpaceQuota,
      spaceUsage: 'number',
      status: 'string',
      updateTimeUtc: 'string',
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAgenticSpacesResponseBodyAgenticSpaces extends $dara.Model {
  agenticSpace?: DescribeAgenticSpacesResponseBodyAgenticSpacesAgenticSpace[];
  static names(): { [key: string]: string } {
    return {
      agenticSpace: 'AgenticSpace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agenticSpace: { 'type': 'array', 'itemType': DescribeAgenticSpacesResponseBodyAgenticSpacesAgenticSpace },
    };
  }

  validate() {
    if(Array.isArray(this.agenticSpace)) {
      $dara.Model.validateArray(this.agenticSpace);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAgenticSpacesResponseBody extends $dara.Model {
  agenticSpaces?: DescribeAgenticSpacesResponseBodyAgenticSpaces;
  /**
   * @example
   * MTc2NTg1MTUyMzA1OTczNTc1OCM0NjQxMzQ****=
   */
  nextToken?: string;
  /**
   * @example
   * BC7C825C-5F65-4B56-BEF6-98C56C7C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      agenticSpaces: 'AgenticSpaces',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agenticSpaces: DescribeAgenticSpacesResponseBodyAgenticSpaces,
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.agenticSpaces && typeof (this.agenticSpaces as any).validate === 'function') {
      (this.agenticSpaces as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

