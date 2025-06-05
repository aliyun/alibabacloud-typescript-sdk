// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateRunning extends $dara.Model {
  /**
   * @remarks
   * The time when the container started to run.
   * 
   * @example
   * 2021-05-23T20:49:31Z
   */
  startedAtstartedAt?: string;
  static names(): { [key: string]: string } {
    return {
      startedAtstartedAt: 'StartedAtstartedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startedAtstartedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

