// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLProgressStage extends $dara.Model {
  /**
   * @remarks
   * The duration of the stage in seconds, with three decimal places. A step often falls entirely within the same second, so the value is not rounded to an integer.
   * 
   * @example
   * 0.483
   */
  duration?: number;
  /**
   * @remarks
   * The end time of the stage in UNIX seconds.
   * 
   * @example
   * 1787474487
   */
  endTime?: number;
  /**
   * @remarks
   * The stage identifier.
   * 
   * @example
   * traj
   */
  key?: string;
  /**
   * @remarks
   * The Chinese name of the stage.
   * 
   * @example
   * Generate trace
   */
  label?: string;
  /**
   * @remarks
   * The log marker text used to match the stage.
   * 
   * @example
   * start/end generation
   */
  marker?: string;
  /**
   * @remarks
   * Specifies whether the stage is optional. If an optional stage does not occur, its status is recorded as skipped.
   * 
   * @example
   * false
   */
  optional?: boolean;
  /**
   * @remarks
   * The start time of the stage in UNIX seconds.
   * 
   * @example
   * 1787474487
   */
  startTime?: number;
  /**
   * @remarks
   * done / running / waiting / pending / skipped
   * 
   * @example
   * done
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      endTime: 'EndTime',
      key: 'Key',
      label: 'Label',
      marker: 'Marker',
      optional: 'Optional',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      endTime: 'number',
      key: 'string',
      label: 'string',
      marker: 'string',
      optional: 'boolean',
      startTime: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

