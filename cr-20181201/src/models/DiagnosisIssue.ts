// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiagnosisIssue extends $dara.Model {
  /**
   * @remarks
   * A unique code that identifies the issue type.
   * 
   * @example
   * RepoNumOverLimit
   */
  code?: string;
  /**
   * @remarks
   * An object that contains additional, unstructured key-value information about the issue.
   */
  extra?: { [key: string]: string };
  /**
   * @remarks
   * The time, in ISO 8601 format, when the issue was first detected.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-01T00:00:00+08:00
   */
  firstOccurrence?: string;
  /**
   * @remarks
   * The time, in ISO 8601 format, when the issue was last detected.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-01T00:30:00+08:00
   */
  lastOccurrence?: string;
  /**
   * @remarks
   * Specifies the severity of the issue. Valid values are `INFO`, `WARN`, and `ERROR`.
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * The total number of times the issue has occurred.
   * 
   * @example
   * 10
   */
  occurrenceCount?: number;
  /**
   * @remarks
   * The recommended action to resolve the issue.
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

