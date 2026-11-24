// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiagnosisTarget extends $dara.Model {
  /**
   * @remarks
   * The end time of the diagnostic.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-01T00:30:00+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The extra parameters.
   */
  extra?: { [key: string]: string };
  /**
   * @remarks
   * The namespace name.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the diagnosed item.
   */
  relatedId?: string;
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * test_repo
   */
  repository?: string;
  /**
   * @remarks
   * The start time of the diagnostic.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-01T00:00:00+08:00
   */
  startTime?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * latest
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      extra: 'Extra',
      namespace: 'Namespace',
      relatedId: 'RelatedId',
      repository: 'Repository',
      startTime: 'StartTime',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      namespace: 'string',
      relatedId: 'string',
      repository: 'string',
      startTime: 'string',
      tag: 'string',
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

