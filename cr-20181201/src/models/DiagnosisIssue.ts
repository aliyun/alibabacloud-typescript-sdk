// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiagnosisIssue extends $dara.Model {
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * RepoNumOverLimit
   */
  code?: string;
  /**
   * @remarks
   * The additional information.
   */
  extra?: { [key: string]: string };
  /**
   * @remarks
   * The first occurrence time of the event.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-01T00:00:00+08:00
   */
  firstOccurrence?: string;
  /**
   * @remarks
   * The last occurrence time of the event.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-01T00:30:00+08:00
   */
  lastOccurrence?: string;
  /**
   * @remarks
   * The event level.
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * The number of occurrences of the event.
   * 
   * @example
   * 10
   */
  occurrenceCount?: number;
  /**
   * @remarks
   * The Solutions.
   * 
   * @example
   * Buy repository quota
   */
  solution?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extra: 'Extra',
      firstOccurrence: 'FirstOccurrence',
      lastOccurrence: 'LastOccurrence',
      level: 'Level',
      occurrenceCount: 'OccurrenceCount',
      solution: 'Solution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      firstOccurrence: 'string',
      lastOccurrence: 'string',
      level: 'string',
      occurrenceCount: 'number',
      solution: 'string',
    };
  }

  validate() {
    if(this.extra) {
      $dara.Model.validateMap(this.extra);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

