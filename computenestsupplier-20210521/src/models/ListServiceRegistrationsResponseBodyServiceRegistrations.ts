// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceRegistrationsResponseBodyServiceRegistrations extends $dara.Model {
  /**
   * @remarks
   * Comment.
   * 
   * @example
   * some info is missing
   */
  comment?: string;
  /**
   * @remarks
   * Finish time.
   * 
   * @example
   * 2021-05-23T00:00:00Z
   */
  finishTime?: string;
  /**
   * @remarks
   * Registration ID.
   * 
   * @example
   * sr-001
   */
  registrationId?: string;
  /**
   * @remarks
   * Service ID.
   * 
   * @example
   * service-f4c0026a254bxxxxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * Registration status. Allowed values:
   * 
   * - Submitted
   * 
   * - Approved
   * 
   * - Rejected
   * 
   * - Canceled
   * 
   * - Executed
   * 
   * - Executed: Executed.
   * 
   * @example
   * Rejected
   */
  status?: string;
  /**
   * @remarks
   * Submit time.
   * 
   * @example
   * 2021-05-22T00:00:00Z
   */
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      finishTime: 'FinishTime',
      registrationId: 'RegistrationId',
      serviceId: 'ServiceId',
      status: 'Status',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      finishTime: 'string',
      registrationId: 'string',
      serviceId: 'string',
      status: 'string',
      submitTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

