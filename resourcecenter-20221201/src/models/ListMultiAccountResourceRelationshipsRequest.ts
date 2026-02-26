// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMultiAccountResourceRelationshipsRequestRelatedResourceFilter extends $dara.Model {
  key?: string;
  matchType?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      matchType: 'MatchType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      matchType: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiAccountResourceRelationshipsRequest extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  relatedResourceFilter?: ListMultiAccountResourceRelationshipsRequestRelatedResourceFilter[];
  /**
   * @remarks
   * This parameter is required.
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      relatedResourceFilter: 'RelatedResourceFilter',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      relatedResourceFilter: { 'type': 'array', 'itemType': ListMultiAccountResourceRelationshipsRequestRelatedResourceFilter },
      resourceId: 'string',
      resourceType: 'string',
      scope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relatedResourceFilter)) {
      $dara.Model.validateArray(this.relatedResourceFilter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

