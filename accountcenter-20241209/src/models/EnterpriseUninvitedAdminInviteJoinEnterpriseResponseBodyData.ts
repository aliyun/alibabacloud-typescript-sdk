// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseUninvitedAdminInviteJoinEnterpriseResponseBodyData extends $dara.Model {
  applicantAliyunId?: string;
  applicantPk?: string;
  applyRemark?: string;
  applyTime?: number;
  auditorAliyunId?: string;
  auditorPk?: string;
  ecId?: string;
  leId?: string;
  leLicenseNo?: string;
  leName?: string;
  message?: string;
  nbId?: string;
  operatedAliyunId?: string;
  operatedPk?: string;
  success?: string;
  timeoutTime?: number;
  todoId?: string;
  todoType?: string;
  static names(): { [key: string]: string } {
    return {
      applicantAliyunId: 'ApplicantAliyunId',
      applicantPk: 'ApplicantPk',
      applyRemark: 'ApplyRemark',
      applyTime: 'ApplyTime',
      auditorAliyunId: 'AuditorAliyunId',
      auditorPk: 'AuditorPk',
      ecId: 'EcId',
      leId: 'LeId',
      leLicenseNo: 'LeLicenseNo',
      leName: 'LeName',
      message: 'Message',
      nbId: 'NbId',
      operatedAliyunId: 'OperatedAliyunId',
      operatedPk: 'OperatedPk',
      success: 'Success',
      timeoutTime: 'TimeoutTime',
      todoId: 'TodoId',
      todoType: 'TodoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicantAliyunId: 'string',
      applicantPk: 'string',
      applyRemark: 'string',
      applyTime: 'number',
      auditorAliyunId: 'string',
      auditorPk: 'string',
      ecId: 'string',
      leId: 'string',
      leLicenseNo: 'string',
      leName: 'string',
      message: 'string',
      nbId: 'string',
      operatedAliyunId: 'string',
      operatedPk: 'string',
      success: 'string',
      timeoutTime: 'number',
      todoId: 'string',
      todoType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

