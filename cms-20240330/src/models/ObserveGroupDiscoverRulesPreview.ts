// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ObserveGroupEntitySummary } from "./ObserveGroupEntitySummary";
import { ObserveGroupInstance } from "./ObserveGroupInstance";
import { ObserveGroupRuleCount } from "./ObserveGroupRuleCount";


export class ObserveGroupDiscoverRulesPreview extends $dara.Model {
  /**
   * @remarks
   * The global association catalog version used for this preview.
   * 
   * @example
   * 03ac8b5b92cb9c2675119d64c31d2520c069647aa9b88979df1bb115472c02b4
   */
  catalogRevision?: string;
  /**
   * @remarks
   * The number of entities returned on this page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The primary entities, associated sub-entities, and total count by entity type.
   */
  entitySummaries?: ObserveGroupEntitySummary[];
  /**
   * @remarks
   * The total count after filtering by entity role, type, and keyword.
   * 
   * @example
   * 12
   */
  filteredCount?: number;
  /**
   * @remarks
   * The list of matched entities on this page.
   */
  instances?: ObserveGroupInstance[];
  /**
   * @remarks
   * The deduplicated count of primary entities.
   * 
   * @example
   * 3
   */
  mainCount?: number;
  /**
   * @remarks
   * The maximum number of entities returned on this page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The next page token, which is empty if there is no next page.
   * 
   * @example
   * eyJvZmZzZXQiOjEwLCJyZXF1ZXN0SGFzaCI6IjAzYWM4YjViOTJjYjljMjY3NTExOWQ2NGMzMWQyNTIwYzA2OTY0N2FhOWI4ODk3OWRmMWJiMTE1NDcyYzAyYjQifQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The deduplicated count of associated sub-entities.
   * 
   * @example
   * 9
   */
  relatedCount?: number;
  /**
   * @remarks
   * The primary entities, associated sub-entities, and total count by rule.
   */
  ruleCounts?: ObserveGroupRuleCount[];
  /**
   * @remarks
   * The deduplicated total count of entities.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      catalogRevision: 'catalogRevision',
      count: 'count',
      entitySummaries: 'entitySummaries',
      filteredCount: 'filteredCount',
      instances: 'instances',
      mainCount: 'mainCount',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      relatedCount: 'relatedCount',
      ruleCounts: 'ruleCounts',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogRevision: 'string',
      count: 'number',
      entitySummaries: { 'type': 'array', 'itemType': ObserveGroupEntitySummary },
      filteredCount: 'number',
      instances: { 'type': 'array', 'itemType': ObserveGroupInstance },
      mainCount: 'number',
      maxResults: 'number',
      nextToken: 'string',
      relatedCount: 'number',
      ruleCounts: { 'type': 'array', 'itemType': ObserveGroupRuleCount },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.entitySummaries)) {
      $dara.Model.validateArray(this.entitySummaries);
    }
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    if(Array.isArray(this.ruleCounts)) {
      $dara.Model.validateArray(this.ruleCounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

