// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMessageCallbackNewResponseBody extends $dara.Model {
  aiccsCallMidRecordCallbackUrl?: string;
  aiccsCallRecordCallbackUrl?: string;
  aiccsSentRecordCallbackUrl?: string;
  artcCdrReportCallBackUrl?: string;
  artcTempStatusReportCallBackUrl?: string;
  cardDyncResCallbackUrl?: string;
  cardTemplateCallBackUrl?: string;
  cardVerderCallBackUrl?: string;
  dcdpCallbackUrl?: string;
  digitSmsTemplateCallBackUrl?: string;
  globeSmsReportCallback?: boolean;
  globeSmsReportCallbackUrl?: string;
  isAiccsCallMidRecord?: boolean;
  isAiccsCallRecord?: boolean;
  isAiccsSentRecord?: boolean;
  isArtcCdrReportCallBack?: boolean;
  isArtcTempStatusReportCallBack?: boolean;
  isDcdpCallback?: boolean;
  isDigitSmsTemplateCallBack?: boolean;
  isGlobeSmsReportCallback?: boolean;
  isOpened?: boolean;
  isSecretReportMessageCallback?: boolean;
  isSecretSmsMessageCallback?: boolean;
  isSignReportCallback?: boolean;
  isSmartCallAsrCallBack?: boolean;
  isSmsReportMessageCallback?: boolean;
  isSmsUpMessageCallback?: boolean;
  isTemplateReportCallback?: boolean;
  isVoiceAsrCallBack?: boolean;
  isVoiceCallMidStateCallBack?: boolean;
  isVoiceCallRecordCallBack?: boolean;
  isVoiceRecordingCallBack?: boolean;
  reportCallbackUrl?: string;
  requestId?: string;
  secretCallbackUrl?: string;
  secretSmsCallbackUrl?: string;
  shortLinkCallBackUrl?: string;
  signReportCallbackUrl?: string;
  smartCallAsrCallBackUrl?: string;
  templateReportCallbackUrl?: string;
  upCallbackUrl?: string;
  voiceAsrCallBackUrl?: string;
  voiceCallMidStateCallBackUrl?: string;
  voiceCallRecordCallBackUrl?: string;
  voiceRecordingCallBackUrl?: string;
  static names(): { [key: string]: string } {
    return {
      aiccsCallMidRecordCallbackUrl: 'AiccsCallMidRecordCallbackUrl',
      aiccsCallRecordCallbackUrl: 'AiccsCallRecordCallbackUrl',
      aiccsSentRecordCallbackUrl: 'AiccsSentRecordCallbackUrl',
      artcCdrReportCallBackUrl: 'ArtcCdrReportCallBackUrl',
      artcTempStatusReportCallBackUrl: 'ArtcTempStatusReportCallBackUrl',
      cardDyncResCallbackUrl: 'CardDyncResCallbackUrl',
      cardTemplateCallBackUrl: 'CardTemplateCallBackUrl',
      cardVerderCallBackUrl: 'CardVerderCallBackUrl',
      dcdpCallbackUrl: 'DcdpCallbackUrl',
      digitSmsTemplateCallBackUrl: 'DigitSmsTemplateCallBackUrl',
      globeSmsReportCallback: 'GlobeSmsReportCallback',
      globeSmsReportCallbackUrl: 'GlobeSmsReportCallbackUrl',
      isAiccsCallMidRecord: 'IsAiccsCallMidRecord',
      isAiccsCallRecord: 'IsAiccsCallRecord',
      isAiccsSentRecord: 'IsAiccsSentRecord',
      isArtcCdrReportCallBack: 'IsArtcCdrReportCallBack',
      isArtcTempStatusReportCallBack: 'IsArtcTempStatusReportCallBack',
      isDcdpCallback: 'IsDcdpCallback',
      isDigitSmsTemplateCallBack: 'IsDigitSmsTemplateCallBack',
      isGlobeSmsReportCallback: 'IsGlobeSmsReportCallback',
      isOpened: 'IsOpened',
      isSecretReportMessageCallback: 'IsSecretReportMessageCallback',
      isSecretSmsMessageCallback: 'IsSecretSmsMessageCallback',
      isSignReportCallback: 'IsSignReportCallback',
      isSmartCallAsrCallBack: 'IsSmartCallAsrCallBack',
      isSmsReportMessageCallback: 'IsSmsReportMessageCallback',
      isSmsUpMessageCallback: 'IsSmsUpMessageCallback',
      isTemplateReportCallback: 'IsTemplateReportCallback',
      isVoiceAsrCallBack: 'IsVoiceAsrCallBack',
      isVoiceCallMidStateCallBack: 'IsVoiceCallMidStateCallBack',
      isVoiceCallRecordCallBack: 'IsVoiceCallRecordCallBack',
      isVoiceRecordingCallBack: 'IsVoiceRecordingCallBack',
      reportCallbackUrl: 'ReportCallbackUrl',
      requestId: 'RequestId',
      secretCallbackUrl: 'SecretCallbackUrl',
      secretSmsCallbackUrl: 'SecretSmsCallbackUrl',
      shortLinkCallBackUrl: 'ShortLinkCallBackUrl',
      signReportCallbackUrl: 'SignReportCallbackUrl',
      smartCallAsrCallBackUrl: 'SmartCallAsrCallBackUrl',
      templateReportCallbackUrl: 'TemplateReportCallbackUrl',
      upCallbackUrl: 'UpCallbackUrl',
      voiceAsrCallBackUrl: 'VoiceAsrCallBackUrl',
      voiceCallMidStateCallBackUrl: 'VoiceCallMidStateCallBackUrl',
      voiceCallRecordCallBackUrl: 'VoiceCallRecordCallBackUrl',
      voiceRecordingCallBackUrl: 'VoiceRecordingCallBackUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiccsCallMidRecordCallbackUrl: 'string',
      aiccsCallRecordCallbackUrl: 'string',
      aiccsSentRecordCallbackUrl: 'string',
      artcCdrReportCallBackUrl: 'string',
      artcTempStatusReportCallBackUrl: 'string',
      cardDyncResCallbackUrl: 'string',
      cardTemplateCallBackUrl: 'string',
      cardVerderCallBackUrl: 'string',
      dcdpCallbackUrl: 'string',
      digitSmsTemplateCallBackUrl: 'string',
      globeSmsReportCallback: 'boolean',
      globeSmsReportCallbackUrl: 'string',
      isAiccsCallMidRecord: 'boolean',
      isAiccsCallRecord: 'boolean',
      isAiccsSentRecord: 'boolean',
      isArtcCdrReportCallBack: 'boolean',
      isArtcTempStatusReportCallBack: 'boolean',
      isDcdpCallback: 'boolean',
      isDigitSmsTemplateCallBack: 'boolean',
      isGlobeSmsReportCallback: 'boolean',
      isOpened: 'boolean',
      isSecretReportMessageCallback: 'boolean',
      isSecretSmsMessageCallback: 'boolean',
      isSignReportCallback: 'boolean',
      isSmartCallAsrCallBack: 'boolean',
      isSmsReportMessageCallback: 'boolean',
      isSmsUpMessageCallback: 'boolean',
      isTemplateReportCallback: 'boolean',
      isVoiceAsrCallBack: 'boolean',
      isVoiceCallMidStateCallBack: 'boolean',
      isVoiceCallRecordCallBack: 'boolean',
      isVoiceRecordingCallBack: 'boolean',
      reportCallbackUrl: 'string',
      requestId: 'string',
      secretCallbackUrl: 'string',
      secretSmsCallbackUrl: 'string',
      shortLinkCallBackUrl: 'string',
      signReportCallbackUrl: 'string',
      smartCallAsrCallBackUrl: 'string',
      templateReportCallbackUrl: 'string',
      upCallbackUrl: 'string',
      voiceAsrCallBackUrl: 'string',
      voiceCallMidStateCallBackUrl: 'string',
      voiceCallRecordCallBackUrl: 'string',
      voiceRecordingCallBackUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

